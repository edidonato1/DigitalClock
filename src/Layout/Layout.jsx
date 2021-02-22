import { LayoutStyles, Footer } from './LayoutStyles';

export default function Layout({ children }) {


  return (
    <LayoutStyles>
      {children}
      <Footer>
        <a href="" target="_blank" rel="noreferrer" id="github-link">see the code ➝</a>
      </Footer>
    </LayoutStyles>
  )
}