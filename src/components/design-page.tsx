'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Scissors, Send } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function DesignPageComponent() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to the AI Fashion Designer. How can I help you create a design today?' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [generatedImage, setGeneratedImage] = useState('/placeholder.svg?height=512&width=512')

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return

    const newMessages = [
      ...messages,
      { role: 'user', content: inputMessage },
      { role: 'system', content: 'I understand your request. Let me generate a design based on that.' }
    ]
    setMessages(newMessages)
    setInputMessage('')

    // Simulate AI image generation (replace with actual AI integration)
    setTimeout(() => {
      setGeneratedImage(`/placeholder.svg?height=512&width=512&text=${encodeURIComponent(inputMessage)}`)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Scissors className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Acme Fashion Design</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/designs">
            Design
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">AI Fashion Designer</h1>
          <ScrollArea className="flex-1 border rounded-md p-4 mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Describe your fashion design idea..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center bg-gray-100">
          <h2 className="text-xl font-semibold mb-4">Generated Design</h2>
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={generatedImage} alt="Generated fashion design" width={512} height={512} />
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Acme Fashion Design. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}