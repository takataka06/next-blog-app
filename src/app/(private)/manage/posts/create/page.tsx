'use client'
import { useState, useActionState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import TextareaAutosize from "react-textarea-autosize";
import "highlight.js/styles/github.css"; // コードハイライト用のスタイル
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function CreatePage() {
  const [content, setContent] = useState("") // 記事の文章
  const [contentLength, setContentLength] = useState(0) // 文字数
  const [preview, setPreview] = useState(false) // プレビュー

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    setContentLength(value.length);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">新規記事作成</h1>
      <form className="space-y-6">
        <div>
          <Label htmlFor="title">タイトル</Label>
          <Input type="text" id="title" name="title" placeholder="タイトルを入力してください" />

        </div>
        <div>
          <Label htmlFor="content">内容</Label>
          <TextareaAutosize
            id="content"
            name="content"
            className="w-full border p-2"
            placeholder="記事の内容をマークダウン形式で入力してください"
            minRows={8}
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="text-right text-sm text-gray-500 mt-1">
          文字数 : {contentLength}
        </div>


      </form>

    </div>
  )
}
