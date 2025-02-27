"use client"

import {
  ChatInput,
  ChatInputSubmit,
  ChatInputTextArea,
} from "@/components/ui/chat-input"
import { useState } from "react"
import { toast } from "sonner"
import {
  ChatMessage,
  ChatMessageAvatar,
  ChatMessageContent,
} from "@/components/ui/chat-message"
import { ChatMessageArea } from "@/components/ui/chat-message-area"
import { type Model, ModelSelector } from "@/components/ui/model-selector"

export default function ChatInputDemo() {
  const [value, setValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [model, setModel] = useState<Model>("deepseek-chat")
  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      toast(value)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full h-full">
      <ModelSelector value={model} onChange={setModel} />
      <ChatInput
        variant="default"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleSubmit}
        loading={isLoading}
        onStop={() => setIsLoading(false)}
      >
        <ChatInputTextArea placeholder="Type a message..." />
        <ChatInputSubmit />
      </ChatInput>
    </div>
  )
}
