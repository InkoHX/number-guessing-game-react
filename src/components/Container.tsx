export const Container: React.FC = ({
  children
}) => {
  return (
    <div className='root'>
      {children}

      <style jsx>{`
        .root {
          padding: 1.5rem;
        }
      `}</style>
    </div>
  )
}
