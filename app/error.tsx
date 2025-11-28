'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 可选：上报错误到 Sentry 或其他工具
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>出错了！</h2>
      <p>{error.message}</p>
      <button onClick={reset}>重试</button>
      <details>
        <summary>调试信息</summary>
        <pre>{error.digest}</pre>
      </details>
    </div>
  );
}
