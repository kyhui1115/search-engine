interface blogSection {
  selectBlog: string[];
}

export default function BlogSection({ selectBlog }: blogSection) {
  return (
    <div className="flex">
      {selectBlog.map((blog) => (
        <iframe key={blog} src={blog} className="h-full mr-4"></iframe>
      ))}
    </div>
  );
}
