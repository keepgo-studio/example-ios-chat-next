import Chatbot from "./Chatbot";
import Home from "./Home";
import { ThemeProvider } from "./ThemeContext";

export default function page() {

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-primary-bg-out text-primary-color">
        <Home />
        <Chatbot />
      </main>
    </ThemeProvider>
  );
}
