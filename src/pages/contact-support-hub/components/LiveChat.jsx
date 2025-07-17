import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [isInfoCollected, setIsInfoCollected] = useState(false);
  const messagesEndRef = useRef(null);

  const supportAgents = [
    { name: 'John Kamau', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', status: 'online' },
    { name: 'Sarah Wanjiku', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', status: 'online' },
    { name: 'Michael Ochieng', avatar: 'https://randomuser.me/api/portraits/men/56.jpg', status: 'away' }
  ];

  const currentAgent = supportAgents[0];

  const quickReplies = [
    'I need a quote for laser cutting',
    'What materials do you work with?',
    'What are your turnaround times?',
    'Do you offer design services?',
    'What are your business hours?'
  ];

  const initialMessages = [
    {
      id: 1,
      sender: 'agent',
      message: `Hello! I'm ${currentAgent.name} from Impact Innovations. How can I help you with your laser cutting needs today?`,
      timestamp: new Date(),
      type: 'text'
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(initialMessages);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      message: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "Thank you for your message. Let me help you with that.",
        "I understand your requirement. Could you provide more details about your project?",
        "That\'s a great question! Let me get you the information you need.",
        "I'd be happy to assist you with that. What specific dimensions are you looking for?",
        "Perfect! I can definitely help you with laser cutting services. What material are you working with?"
      ];

      const agentMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleInfoSubmit = () => {
    if (userInfo.name && userInfo.email) {
      setIsInfoCollected(true);
      const welcomeMessage = {
        id: Date.now(),
        sender: 'agent',
        message: `Thank you ${userInfo.name}! I have your contact information. How can I assist you with your laser cutting project today?`,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, welcomeMessage]);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-KE', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105"
        >
          <Icon name="MessageCircle" size={24} color="white" />
          
          {/* Online indicator */}
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white">
              <div className="w-full h-full bg-success rounded-full animate-pulse"></div>
            </div>
          )}
          
          {/* Notification badge */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-error text-white text-xs rounded-full flex items-center justify-center font-medium">
            1
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[32rem] bg-white rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={currentAgent.avatar}
              alt={currentAgent.name}
              className="w-10 h-10 rounded-full border-2 border-white/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-medium">{currentAgent.name}</h3>
            <p className="text-xs text-white/80">
              {isOnline ? 'Online • Responds in ~2 min' : 'Away • Will respond soon'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <Icon name="Minus" size={16} color="white" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <Icon name="X" size={16} color="white" />
          </button>
        </div>
      </div>

      {/* User Info Collection */}
      {!isInfoCollected && (
        <div className="p-4 bg-muted/30 border-b border-border">
          <h4 className="text-sm font-medium text-foreground mb-3">
            Let's get started! Please share your details:
          </h4>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Your name"
              value={userInfo.name}
              onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              className="text-sm"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={userInfo.email}
              onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              className="text-sm"
            />
            <Button
              size="sm"
              fullWidth
              onClick={handleInfoSubmit}
              disabled={!userInfo.name || !userInfo.email}
            >
              Start Chat
            </Button>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${
              message.sender === 'user' ?'bg-primary text-white' :'bg-muted text-foreground'
            } rounded-lg px-3 py-2`}>
              <p className="text-sm">{message.message}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground rounded-lg px-3 py-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {isInfoCollected && messages.length <= 2 && (
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.slice(0, 3).map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1 bg-muted text-foreground text-xs rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Message Input */}
      {isInfoCollected && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="text-sm"
              />
            </div>
            <Button
              size="sm"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              iconName="Send"
            />
          </div>
          
          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
            <span>Powered by Impact Innovations</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;