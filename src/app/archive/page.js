import { Suspense } from 'react';
import Link from 'next/link';
import { getPosts } from '../lib/posts';
import ArchivePost from '../components/ArchivePost';
import { PostListSkeleton } from '../components/Skeleton';

function EmptyPosts() {
  return (
    <div className="empty-state" data-testid="empty-posts">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-3 text-orange-500 dark:text-orange-400" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13H7zM14 3v5h5M10 12h6M10 16h4" />
      </svg>
      <h2 className="mb-1 text-gray-900 dark:text-white">No diary entries yet</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        The archive is waiting for its first entry. New writing is on the way.
      </p>
      <Link href="/" className="text-orange-700 hover:text-orange-500 dark:text-orange-300 dark:hover:text-orange-400">
        Back to home →
      </Link>
    </div>
  );
}

async function PostList() {
  const posts = await getPosts();

  if (posts.length === 0) return <EmptyPosts />;

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <ArchivePost key={post.slug} post={post} index={index} totalPosts={posts.length} />
      ))}
    </div>
  );
}

export default function Archive() {
  return (
    <main className="max-w-7xl px-4 py-6 mx-auto sm:px-6 md:py-8">
      <div className="pb-8 mb-12 border-b" style={{ borderColor: '#999' }}>
        <h1 className="text-gray-900 dark:text-white">Archive</h1>
        <p className="m-0 text-lg text-orange-600 dark:text-gray-400">A collection of thoughts on tech and web development</p>
      </div>

      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </main>
  );
}
