import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={changeTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "yellow",
      }}
    >
      {" "}
      테마 변경
    </button>
  );
};

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>블로그</h1>
      <hr />
      <h2>블로그 제목</h2>
      <p>블로그 내용</p>
    </div>
  );
};

const News = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>뉴스</h1>
      <hr />
      <h2>뉴스 제목</h2>
      <p>뉴스 내용</p>
    </div>
  );
};
const Contents = () => {
  return (
    <>
      <Blog />
      <News />
    </>
  );
};

const ThemeParent = () => {
  return (
    <ThemeProvider>
      <h1>테마가 적용된 페이지</h1>
      <ThemedButton />
      <Contents />
    </ThemeProvider>
  );
};
export default ThemeParent;
