import React, { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Menu,
  X,
  MoreHorizontal,
  ThumbsUp,
  ThumbsDown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

/* --------------------  TYPES  -------------------- */
interface Video {
  id: number;
  url: string;
  title: string;
  description: string;
  views: number;
  uploadDate: string;
  likes: number;
  dislikes: number;
  commentsCount: number;
  channel: string;
  channelAvatar: string;
  duration: string;
  thumbnail: string;
  liked?: boolean;
  disliked?: boolean;
}

interface Comment {
  id: number;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
  liked?: boolean;
}

/* --------------------  MOCK DATA  -------------------- */
const sampleVideos: Video[] = [
  {
    id: 1,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Introduction to Cell Biology - Complete Overview",
    description:
      "Comprehensive introduction to cell biology covering cell structure, organelles, and basic cellular processes. Perfect for biology students starting their journey.",
    views: 856420,
    uploadDate: "Nov 15, 2023",
    likes: 12400,
    dislikes: 324,
    commentsCount: 89,
    channel: "Biology Explained",
    channelAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    duration: "18:45",
    thumbnail:
      "https://images.unsplash.com/photo/1559757175-0eb30cd8c063?w=120&h=68&fit=crop",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=URUJD5NEXC8",
    title: "DNA Structure and Replication Explained",
    description:
      "Learn about the double helix structure of DNA and how DNA replication works in cells. Includes detailed animations and explanations.",
    views: 642180,
    uploadDate: "Dec 3, 2023",
    likes: 8900,
    dislikes: 167,
    commentsCount: 156,
    channel: "Molecular Biology Hub",
    channelAvatar:
      "https://images.unsplash.com/photo/1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    duration: "22:30",
    thumbnail:
      "https://images.unsplash.com/photo/1576091160550-2173fd22a960?w=120&h=68&fit=crop",
  },
  /* -------  6  EXTRA  URLS  ------- */
  {
    id: 7,
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
    title: "Big Buck Bunny – 10 s 1080p",
    description: "Short 1080p clip for instant loading tests.",
    views: 120_000,
    uploadDate: "Jun 1, 2024",
    likes: 560,
    dislikes: 12,
    commentsCount: 34,
    channel: "Test Videos",
    channelAvatar: "https://i.pravatar.cc/32?u=test",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
  },
  {
    id: 8,
    url: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    title: "Big Buck Bunny – Adaptive HLS",
    description: "Multi-bitrate HLS stream (360 → 540 p).",
    views: 450_000,
    uploadDate: "Jun 5, 2024",
    likes: 1_200,
    dislikes: 18,
    commentsCount: 89,
    channel: "Akamai Test",
    channelAvatar: "https://i.pravatar.cc/32?u=akamai",
    duration: "9:56",
    thumbnail: "https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 9,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "W3Schools – 480p MP4",
    description: "Lightweight 480p MP4 for quick tests.",
    views: 98_000,
    uploadDate: "Jun 10, 2024",
    likes: 340,
    dislikes: 4,
    commentsCount: 12,
    channel: "W3Schools",
    channelAvatar: "https://i.pravatar.cc/32?u=w3",
    duration: "0:08",
    thumbnail: "https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 10,
    url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    title: "Sample Videos – 720p 1 MB",
    description: "Tiny 720p file for mobile testing.",
    views: 67_000,
    uploadDate: "Jun 12, 2024",
    likes: 230,
    dislikes: 2,
    commentsCount: 8,
    channel: "Sample Videos",
    channelAvatar: "https://i.pravatar.cc/32?u=sv",
    duration: "0:05",
    thumbnail: "https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 11,
    url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1920x1080_2mb.mp4",
    title: "Sample Videos – 1080p 2 MB",
    description: "Small 1080p clip for HD tests.",
    views: 234_000,
    uploadDate: "Jun 15, 2024",
    likes: 890,
    dislikes: 11,
    commentsCount: 45,
    channel: "Sample Videos",
    channelAvatar: "https://i.pravatar.cc/32?u=sv",
    duration: "0:10",
    thumbnail: "https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
  {
    id: 12,
    url: "https://cdn.theguardian.tv/mainwebsite/2015/07/20/150716YesMen_synd_768k_vp8.webm",
    title: "Guardian – WebM 768k",
    description: "WebM format test (VP8).",
    views: 312_000,
    uploadDate: "Jun 18, 2024",
    likes: 1_100,
    dislikes: 22,
    commentsCount: 76,
    channel: "Guardian",
    channelAvatar: "https://i.pravatar.cc/32?u=gdn",
    duration: "2:34",
    thumbnail: "https://i.ytimg.com/vi/YE7VzlLtp-4/maxresdefault.jpg",
  },
];

const mockComments: Comment[] = [
  {
    id: 1,
    user: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
    text: "Great explanation! Really helped me understand the concept.",
    timestamp: "2 days ago",
    likes: 24,
  },
  {
    id: 2,
    user: "Sarah Lee",
    avatar:
      "https://images.unsplash.com/photo/1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
    text: "Could you cover more on cell division in the next video?",
    timestamp: "1 day ago",
    likes: 15,
  },
];

/* --------------------  NATIVE VIDEO PLAYER  -------------------- */
const NativeVideoPlayer = ({
  src,
  playing,
  onPlay,
  onPause,
  onProgress,
  onDuration,
  volume,
  muted,
}: {
  src: string;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  onProgress: (state: { played: number }) => void;
  onDuration: (d: number) => void;
  volume: number;
  muted: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  /* keep external state in sync */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const update = () => {
      if (v.duration) {
        const played = v.currentTime / v.duration;
        setProgress(played);
        onProgress({ played });
      }
    };
    const loaded = () => {
      setDuration(v.duration);
      onDuration(v.duration);
    };
    v.addEventListener("timeupdate", update);
    v.addEventListener("loadedmetadata", loaded);
    v.addEventListener("ended", onPause);
    return () => {
      v.removeEventListener("timeupdate", update);
      v.removeEventListener("loadedmetadata", loaded);
      v.removeEventListener("ended", onPause);
    };
  }, [onProgress, onDuration, onPause]);

  /* play / pause */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.play().catch(() => {}) : v.pause();
  }, [playing]);

  /* volume / mute */
  const [localMuted, setLocalMuted] = useState(muted);
  const [localVolume, setLocalVolume] = useState(volume);
  
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume;
    v.muted = muted;
    setLocalVolume(volume);
    setLocalMuted(muted);
  }, [volume, muted]);

  /* playback rate */
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.playbackRate = speed;
  }, [speed]);

  /* seek */
  const seekTo = (ratio: number) => {
    const v = videoRef.current;
    if (v && duration) v.currentTime = ratio * duration;
  };

  /* fullscreen */
  const enterFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    // @ts-ignore
    else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
    // @ts-ignore
    else if (v.msRequestFullscreen) v.msRequestFullscreen();
  };

  /* format time */
  const formatTime = (s: number) => {
    if (isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  /* ------- RENDER ------- */
  return (
    <div className="relative w-full aspect-video bg-black">
      <video
        ref={videoRef}
        src={src.trim()}
        className="w-full h-full"
        onPlay={onPlay}
        onPause={onPause}
        playsInline
        preload="metadata"
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* centre play button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => videoRef.current?.play()}
            className="bg-black/60 hover:bg-black/80 active:bg-black/90 rounded-full p-4 lg:p-6 transition-all duration-200 backdrop-blur-sm"
          >
            <Play className="w-8 h-8 lg:w-12 lg:h-12 text-white fill-current" />
          </button>
        </div>
      )}

      {/* bottom control bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        {/* progress */}
        <div className="px-4 pb-3">
          <input
            type="range"
            min="0"
            max="1"
            step="any"
            value={progress}
            onChange={(e) => seekTo(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
              [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none"
          />
        </div>

        <div className="flex items-center justify-between px-4 pb-4">
          {/* left group */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => (playing ? onPause() : onPlay())}
              className="text-white p-3 rounded-full transition-colors active:bg-white/20"
            >
              {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            {/* mute / volume desktop */}
            <button
              onClick={() => {
                const v = videoRef.current;
                if (v) {
                  v.muted = !v.muted;
                  setLocalMuted(v.muted);
                }
              }}
              className="text-white p-2 rounded-full transition-colors active:bg-white/20 lg:block hidden"
            >
              {localMuted || localVolume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <div className="hidden lg:flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={localVolume}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  if (videoRef.current) {
                    videoRef.current.volume = v;
                    videoRef.current.muted = v === 0;
                    setLocalVolume(v);
                    setLocalMuted(v === 0);
                  }
                }}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer 
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
            </div>

            {/* time */}
            <span className="text-white text-sm font-medium">
              {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
            </span>
          </div>

          {/* right group – speed + fullscreen */}
          <div className="flex items-center gap-2">
            {/* playback speed */}
            <select
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="bg-black/60 text-white text-xs rounded px-2 py-1 outline-none"
            >
              <option value={0.5}>0.5×</option>
              <option value={0.75}>0.75×</option>
              <option value={1}>1×</option>
              <option value={1.25}>1.25×</option>
              <option value={1.5}>1.5×</option>
              <option value={2}>2×</option>
            </select>

            {/* fullscreen */}
            <button
              onClick={enterFullscreen}
              className="text-white p-2 rounded-full transition-colors active:bg-white/20"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------------------  MAIN PAGE COMPONENT  -------------------- */
const VideoPlayer: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Video>(sampleVideos[0]);
  const [playing, setPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videos] = useState<Video[]>(sampleVideos);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [commentsExpanded, setCommentsExpanded] = useState(false);

  /* initialise like flags */
  useEffect(() => {
    videos.forEach((v) => {
      v.liked = false;
      v.disliked = false;
    });
  }, []);

  /* auto-hide controls on mobile */
  useEffect(() => {
    if (controlsTimeout) clearTimeout(controlsTimeout);
    if (playing && showControls && window.innerWidth <= 768) {
      const t = setTimeout(() => setShowControls(false), 3000);
      setControlsTimeout(t);
    }
    return () => {
      if (controlsTimeout) clearTimeout(controlsTimeout);
    };
  }, [playing, showControls]);

  /* -------- handlers -------- */
  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video);
    setPlaying(true);
    setSidebarOpen(false);
    setProgress(0);
    setPlayed(0);
    setDuration(0);
  };

  const handleLike = (videoId: number) => {
    const vid = videos.find((v) => v.id === videoId);
    if (!vid) return;
    const wasLiked = vid.liked;
    const wasDisliked = vid.disliked;
    vid.likes += wasLiked ? -1 : 1;
    vid.dislikes += wasDisliked ? -1 : 0;
    vid.liked = !wasLiked;
    vid.disliked = false;
    setVideos([...videos]);
    if (activeVideo.id === videoId) setActiveVideo({ ...vid });
  };

  const handleDislike = (videoId: number) => {
    const vid = videos.find((v) => v.id === videoId);
    if (!vid) return;
    const wasDisliked = vid.disliked;
    const wasLiked = vid.liked;
    vid.dislikes += wasDisliked ? -1 : 1;
    vid.likes += wasLiked ? -1 : 0;
    vid.disliked = !wasDisliked;
    vid.liked = false;
    setVideos([...videos]);
    if (activeVideo.id === videoId) setActiveVideo({ ...vid });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const c: Comment = {
      id: comments.length + 1,
      user: "Current User",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
      text: newComment,
      timestamp: "Just now",
      likes: 0,
    };
    setComments([c, ...comments]);
    setNewComment("");
  };

  const handleLikeComment = (commentId: number) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, likes: c.liked ? c.likes - 1 : c.likes + 1, liked: !c.liked }
          : c
      )
    );
  };

  const handleSortComments = () =>
    setSortBy((s) => (s === "newest" ? "oldest" : "newest"));

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setProgress(state.played * 100);
      setPlayed(state.played);
    }
  };
  const handleDuration = (d: number) => setDuration(d);
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setProgress(v);
    setPlayed(v / 100);
    setSeeking(true);
  };
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const v = parseFloat((e.target as HTMLInputElement).value);
    if (window.playerRef) (window.playerRef as any).seekTo(v / 100);
    setSeeking(false);
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    setMuted(v === 0);
  };
  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (!next) setVolume(0.8);
      return next;
    });
  };

  /* derived */
  const filteredVideos = videos.filter(
    (v) =>
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedComments = [...comments].sort((a, b) =>
    sortBy === "newest"
      ? new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      : new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
  const formatTime = (s: number) => {
    if (isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };
  const currentTime = played * duration;
  const displayDuration = duration || 0;

  /* ----------  RENDER  ---------- */
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* header */}
      <header className="w-full bg-white px-3 py-2.5 border-b sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.history.back()}
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
            <button className="hidden lg:block bg-[#106EBE] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Practice Exams
            </button>
          </div>
        </div>
      </header>

      <div className="lg:max-w-full lg:mx-auto lg:px-6 lg:py-6">
        {/* chapter title */}
        <div className="lg:hidden px-3 py-3 bg-white border-b">
          <h1 className="text-lg font-bold text-gray-800">Biology Chapter 01</h1>
        </div>
        <div className="hidden lg:block mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Biology Chapter 01</h1>
        </div>

        {/* mobile practice exam */}
        <div className="lg:hidden px-3 py-3 bg-gray-50">
          <button className="w-full bg-[#106EBE] text-white py-3 rounded-lg font-medium">
            Practice Exams
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* main content */}
          <main className="flex-1">
            <div className="bg-white lg:rounded-xl lg:shadow-sm overflow-hidden">
              {/*  NATIVE PLAYER  */}
              <NativeVideoPlayer
                src={activeVideo.url}
                playing={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onProgress={handleProgress}
                onDuration={handleDuration}
                volume={volume}
                muted={muted}
              />

              {/* meta / description / comments */}
              <div className="p-3 lg:p-6">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
                  {activeVideo.title}
                </h1>

                {/* mobile meta */}
                <div className="flex flex-col gap-3 lg:hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <span>{activeVideo.views.toLocaleString()} views</span>
                      <span className="mx-2">•</span>
                      <span>{activeVideo.uploadDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLike(activeVideo.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-full transition-colors flex-1 justify-center ${
                        activeVideo.liked
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600 active:bg-gray-200"
                      }`}
                    >
                      <ThumbsUp
                        className={`w-4 h-4 ${activeVideo.liked ? "fill-current" : ""}`}
                      />
                      <span className="text-sm font-medium">
                        {activeVideo.likes.toLocaleString()}
                      </span>
                    </button>
                    <button
                      onClick={() => handleDislike(activeVideo.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-full transition-colors flex-1 justify-center ${
                        activeVideo.disliked
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 active:bg-gray-200"
                      }`}
                    >
                      <ThumbsDown
                        className={`w-4 h-4 ${activeVideo.disliked ? "fill-current" : ""}`}
                      />
                      <span className="text-sm font-medium">
                        {activeVideo.dislikes.toLocaleString()}
                      </span>
                    </button>
                  </div>
                </div>

                {/* desktop meta */}
                <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>{activeVideo.views.toLocaleString()} views</span>
                    <span className="mx-2">•</span>
                    <span>{activeVideo.uploadDate}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(activeVideo.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        activeVideo.liked
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <ThumbsUp
                        className={`w-4 h-4 ${activeVideo.liked ? "fill-current" : ""}`}
                      />
                      <span className="text-sm font-medium">
                        {activeVideo.likes.toLocaleString()}
                      </span>
                    </button>
                    <button
                      onClick={() => handleDislike(activeVideo.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        activeVideo.disliked
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <ThumbsDown
                        className={`w-4 h-4 ${activeVideo.disliked ? "fill-current" : ""}`}
                      />
                      <span className="text-sm font-medium">
                        {activeVideo.dislikes.toLocaleString()}
                      </span>
                    </button>
                  </div>
                </div>

                {/* description */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setDescriptionExpanded((e) => !e)}
                    className="flex items-center justify-between w-full py-2 text-left"
                  >
                    <span className="text-sm font-medium text-gray-700">Description</span>
                    {descriptionExpanded ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                  {descriptionExpanded && (
                    <div className="pb-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {activeVideo.description}
                      </p>
                    </div>
                  )}
                </div>
                <div className="hidden lg:block">
                  <p className="text-gray-700 mb-6">{activeVideo.description}</p>
                </div>

                <hr className="border-gray-200 mb-4 lg:mb-6" />

                {/* comments */}
                <div>
                  {/* mobile comments toggle */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => setCommentsExpanded((e) => !e)}
                      className="flex items-center justify-between w-full py-2 text-left"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {comments.length} Comments
                      </span>
                      {commentsExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {/* desktop comments header */}
                  <div className="hidden lg:flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {comments.length} Comments
                    </h2>
                    <button
                      onClick={handleSortComments}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                      <span className="font-medium">SORT BY {sortBy.toUpperCase()}</span>
                    </button>
                  </div>

                  {/* comments content */}
                  <div
                    className={`${
                      commentsExpanded || window.innerWidth >= 1024 ? "block" : "hidden"
                    } lg:block`}
                  >
                    {/* sort button mobile */}
                    <div className="lg:hidden mb-4">
                      <button
                        onClick={handleSortComments}
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg transition-colors w-full justify-center"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                        <span className="font-medium">SORT BY {sortBy.toUpperCase()}</span>
                      </button>
                    </div>

                    {/* add comment */}
                    <form onSubmit={handleCommentSubmit} className="mb-6">
                      <div className="flex gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
                          alt="User"
                          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="relative">
                            <textarea
                              placeholder="Add a public comment..."
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              rows={2}
                              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                            {newComment.trim() && (
                              <div className="flex justify-end gap-2 mt-2">
                                <button
                                  type="button"
                                  onClick={() => setNewComment("")}
                                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="submit"
                                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  Comment
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>

                    {/* comments list */}
                    <div className="space-y-4 lg:space-y-6">
                      {sortedComments.map((c) => (
                        <div key={c.id} className="flex gap-3">
                          <img
                            src={c.avatar}
                            alt={c.user}
                            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {c.user}
                              </p>
                              <span className="text-xs text-gray-500 flex-shrink-0">
                                • {c.timestamp}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                              {c.text}
                            </p>
                            <button
                              onClick={() => handleLikeComment(c.id)}
                              className={`flex items-center gap-1 text-xs transition-colors p-1 -ml-1 rounded ${
                                c.liked ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                              }`}
                            >
                              <ThumbsUp className={`w-3 h-3 ${c.liked ? "fill-current" : ""}`} />
                              <span>{c.likes}</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* sidebar */}
          <aside
            className={`lg:block w-full lg:w-96 ${
              sidebarOpen ? "fixed inset-0 z-50 bg-white" : "hidden"
            }`}
          >
            {sidebarOpen && (
              <div className="h-full flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                  <span className="font-semibold text-lg">Biology Chapter 01</span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {/* search */}
                  <div className="relative mb-6">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search videos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* video list */}
                  <div className="space-y-3">
                    {filteredVideos.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => handleVideoSelect(v)}
                        className={`flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 active:scale-95 ${
                          activeVideo.id === v.id
                            ? "bg-blue-50 border-2 border-blue-200"
                            : "bg-gray-50 active:bg-gray-100 border-2 border-transparent"
                        }`}
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={v.thumbnail}
                            alt={v.title}
                            className="w-28 h-16 object-cover rounded-lg"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                            {v.duration}
                          </div>
                          {activeVideo.id === v.id && (
                            <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-current" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-2 mb-1 text-gray-800 leading-tight">
                            {v.title}
                          </p>
                          <p className="text-xs text-gray-600 mb-1 truncate">{v.channel}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{v.views.toLocaleString()} views</span>
                            <span className="mx-1">•</span>
                            <span>{v.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* desktop sidebar */}
            {!sidebarOpen && (
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {filteredVideos.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => handleVideoSelect(v)}
                      className={`flex gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                        activeVideo.id === v.id
                          ? "bg-blue-50 border-2 border-blue-200"
                          : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {v.duration}
                        </div>
                        {activeVideo.id === v.id && (
                          <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Play className="w-4 h-4 text-white fill-current" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2 mb-1 text-gray-800">
                          {v.title}
                        </p>
                        <p className="text-xs text-gray-600 mb-1">{v.channel}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{v.views.toLocaleString()} views</span>
                          <span className="mx-1">•</span>
                          <span>{v.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;