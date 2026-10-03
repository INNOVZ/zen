import sys

def insert_route():
    with open('../backend/app/routers/chat.py', 'r') as f:
        content = f.read()
    
    route_code = """
@router.delete("/conversations/{conversation_id}")
async def delete_conversation(
    conversation_id: str,
    user=Depends(verify_jwt_token_from_header),
):
    \"\"\"Delete a specific conversation\"\"\"
    try:
        user_data = await get_user_with_org(user["user_id"])
        org_id = user_data["org_id"]
        
        # Verify ownership
        conv_response = (
            supabase.table("conversations")
            .select("id")
            .eq("id", conversation_id)
            .eq("org_id", org_id)
            .execute()
        )
        
        if not conv_response.data:
            raise HTTPException(status_code=404, detail="Conversation not found")
            
        # Delete messages first (if no cascade)
        supabase.table("messages").delete().eq("conversation_id", conversation_id).execute()
        
        # Delete conversation
        supabase.table("conversations").delete().eq("id", conversation_id).execute()
        
        return {"deleted": True, "id": conversation_id}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Failed to delete conversation: {str(e)}")
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
