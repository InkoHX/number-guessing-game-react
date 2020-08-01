export const Navbar: React.FC = () => (
  <div id='navbar'>
    <h1 className='title'>Number Guessing Game</h1>
    <a className='item' href='https://github.com/InkoHX/number-guessing-game-react'>Source on GitHub</a>

    <style jsx>{`
      #navbar {
        display: flex;
          padding: 1rem 1rem;
          background: #d3d3d3;
          box-sizing: border-box;
          width: 100%;
      }

      .item {
        justify-content: flex-end;
        align-items: center;
        display: flex;
        flex: 1;
      }

      h1 {
        margin: 0;
      }

      a {
        color: blue;
      }
    `}</style>
  </div>
)