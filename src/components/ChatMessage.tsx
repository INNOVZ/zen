"use client";

import { memo } from "react";
import { Bot, User, ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageButton {
  text: string;
  value: string;
  type?: string;
}

interface ProductCard {
  id?: string | number;
  name: string;
  price?: number;
  currency?: string;
  url?: string;
  image?: string;
  description?: string;
  inventory?: number;
  vendor?: string;
  type?: string;
}

export interface ChatMessageProps {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  sources?: ({ title: string; url: string; content?: string } | string)[];
  buttons?: MessageButton[];
  productCards?: ProductCard[];
  botColor?: string;
  onButtonClick?: (value: string) => void;
}

/**
 * Memoized Chat Message Component
 * Renders markdown-rich bot responses and plain text user messages.
 * Only re-renders when message content, buttons, or sources change.
 */
export const ChatMessage = memo(
  function ChatMessage({
    type,
    content,
    sources,
    buttons,
    productCards,
    botColor,
    onButtonClick,
  }: ChatMessageProps) {
    return (
      <div
        className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-[85%] p-2 rounded-lg text-sm ${type === "user" ? "text-white ml-2" : "bg-gray-100 mr-2"
            }`}
          style={{
            backgroundColor: type === "user" ? botColor : undefined,
          }}
        >
          <div className="flex items-start gap-2">
            {type === "bot" && (
              <Bot className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
            )}
            {type === "user" && (
              <User className="h-3 w-3 text-white mt-0.5 flex-shrink-0" />
            )}
            <div className="flex-1">
              {type === "user" ? (
                <p className="whitespace-pre-wrap">{content}</p>
              ) : (
                <div className="chat-markdown prose prose-sm max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // Headings: compact for chat context
                      h1: ({ children }) => (
                        <h3 className="text-sm font-bold mt-2 mb-1">{children}</h3>
                      ),
                      h2: ({ children }) => (
                        <h4 className="text-sm font-bold mt-2 mb-1">{children}</h4>
                      ),
                      h3: ({ children }) => (
                        <h5 className="text-sm font-semibold mt-1.5 mb-0.5">{children}</h5>
                      ),
                      // Paragraphs: tight spacing for chat
                      p: ({ children }) => (
                        <p className="mb-1.5 last:mb-0 leading-relaxed">{children}</p>
                      ),
                      // Bold
                      strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                      ),
                      // Italic
                      em: ({ children }) => (
                        <em className="italic">{children}</em>
                      ),
                      // Links: styled and open in new tab
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium"
                        >
                          {children}
                        </a>
                      ),
                      // Unordered lists
                      ul: ({ children }) => (
                        <ul className="list-disc pl-4 my-1 space-y-0.5">{children}</ul>
                      ),
                      // Ordered lists
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-4 my-1 space-y-0.5">{children}</ol>
                      ),
                      // List items
                      li: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                      ),
                      // Line breaks / horizontal rule
                      hr: () => <hr className="my-2 border-gray-300" />,
                      // Code (inline)
                      code: ({ children }) => (
                        <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-xs font-mono">
                          {children}
                        </code>
                      ),
                      // Blockquote
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-blue-400 pl-2 my-1 italic text-gray-600">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              )}

              {/* Product Cards */}
              {productCards && productCards.length > 0 && (
                <div className="mt-3 space-y-2">
                  {productCards.map((product, index) => (
                    <div
                      key={product.id || index}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex">
                        {product.image && (
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                        )}
                        <div className="flex-1 p-2 min-w-0">
                          <h4 className="font-medium text-gray-900 text-xs truncate">
                            {product.name}
                          </h4>
                          {product.description && (
                            <p
                              className="text-xs text-gray-500 mt-0.5 line-clamp-2"
                              title={product.description}
                            >
                              {product.description}
                            </p>
                          )}
                          {product.price && (
                            <p className="text-sm font-semibold text-green-600 mt-0.5">
                              {product.currency} {product.price}
                            </p>
                          )}
                          {product.inventory !== undefined &&
                            product.inventory > 0 && (
                              <p className="text-xs text-gray-500 mt-0.5">
                                In stock: {product.inventory}
                              </p>
                            )}
                          {product.url && (
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1"
                            >
                              <ShoppingCart className="h-3 w-3" />
                              View Product
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {sources && sources.length > 0 && (
                <div className="mt-2 text-xs text-gray-500 border-t pt-2 border-gray-200">
                  <div className="font-medium mb-1">Sources:</div>
                  <ul className="list-disc pl-4 space-y-0.5">
                    {sources.map((source, index) => {
                      const isString = typeof source === "string";
                      const title = isString
                        ? source
                        : source.title || source.url;
                      const url = isString ? source : source.url;

                      return (
                        <li key={index}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline break-all"
                          >
                            {title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {buttons && buttons.length > 0 && (
                <div className="mt-3 flex flex-col gap-2">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant="outline"
                      className="w-full text-left justify-start hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => onButtonClick?.(button.value)}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison: only re-render if these specific props change
    return (
      prevProps.id === nextProps.id &&
      prevProps.content === nextProps.content &&
      prevProps.buttons?.length === nextProps.buttons?.length &&
      prevProps.sources?.length === nextProps.sources?.length &&
      prevProps.productCards?.length === nextProps.productCards?.length &&
      prevProps.type === nextProps.type &&
      prevProps.botColor === nextProps.botColor
    );
  },
);
