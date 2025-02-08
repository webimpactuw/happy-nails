import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import Book from "./routes/Book";
import Services from "./routes/Services";
import Gallery from "./routes/Gallery";

const router = createBrowserRouter(
  [
    { path: '/', element: <App /> },
    { path: '/book', element: <Book /> },
    { path: '/services', element: <Services /> },
    { path: '/gallery', element: <Gallery />}
  ]
)

export default router;