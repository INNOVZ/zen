import sys

def insert_route():
    with open('../backend/app/routers/chat.py', 'r') as f:
        content = f.read()
    
    route_code = """
@router.get("/conversations/{conversation_id}")
async def get_conversation(
    conversation_id: str,
    user=Depends(verify_jwt_token_from_header),
):
    \"\"\"Get a specific conversation and its messages\"\"\"
    try:
        user_data = await get_user_with_org(user["user_id"])
        org_id = user_data["org_id"]
        
        # Get conversation
        conv_response = (
            supabase.table("conversations")
            .select("*")
            .eq("id", conversation_id)
            .eq("org_id", org_id)
            .execute()
        )
        
        if not conv_response.data:
            raise HTTPException(status_code=404, detail="Conversation not found")
            
        conversation = conv_response.data[0]
        
        # Get messages
        msg_response = (
            supabase.table("messages")
            .select("*")
            .eq("conversation_id", conversation_id)
            .order("created_at")
            .execute()
        )
        
        conversation["messages"] = msg_response.data or []
        
        return conversation
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Failed to get conversation: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
"""
    
    # Insert before list_conversations
    idx = content.find("async def list_conversations")
    if idx == -1:
        print("Could not find list_conversations")
        return
        
    # Find the @router.get above it
    prefix_idx = content.rfind("@router.get", 0, idx)
    if prefix_idx == -1:
        prefix_idx = idx
        
    new_content = content[:prefix_idx] + route_code + "\n" + content[prefix_idx:]
    
    with open('../backend/app/routers/chat.py', 'w') as f:
        f.write(new_content)
        
insert_route()
