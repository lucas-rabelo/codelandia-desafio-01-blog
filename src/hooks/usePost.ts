import { useEffect, useState } from "react";

import { posts } from "../utils/posts";

export function usePost(postId: string) {
    const [ title, setTitle ] = useState<string>('');
    const [ content, setContent ] = useState<string>('');
    const [ date, setDate ] = useState<string>('');

    useEffect(() => {
        const post = posts.find(post => post.id === postId) ?? null;

        if(post)
        {
            setTitle(post?.title);
            setContent(post?.content);
            setDate(post.date);
        }

    }, [postId]);
    
    return { date, title, content }
}