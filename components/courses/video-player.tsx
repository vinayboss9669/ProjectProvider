"use client"

interface VideoPlayerProps {
  videoId: string
  title: string
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      
      {/* Project Demo Label */}
      <div className="px-4 py-3 border-t border-glass-border bg-gradient-to-r from-neon-blue/5 to-neon-purple/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Project Demo</span>
          </div>
          <span className="text-xs text-neon-blue font-medium">Sample Implementation</span>
        </div>
      </div>
    </div>
  )
}
