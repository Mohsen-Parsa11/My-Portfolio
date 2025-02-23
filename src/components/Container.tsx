
function Container({children}:{children:React.ReactNode}) {
  return (
    <div className="container mx-auto max-w-6xl">
        {children}
    </div>
  )
}

export default Container