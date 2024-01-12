import "./App.css";
import { SplitScreen } from "./components/split-screen";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { NumberedList } from "./components/lists/Numbered";
import { RegularList } from "./components/lists/Regular";
import { UserLoader } from "./components/loader/userLoader";
import { UserRenderPropsLoader } from "./components/loader/userRenderProps";
import { authors } from "./data/authors";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "lavender" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "yellow" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"Right I am Uday doing React Course"} />
        <RightSideComp title={"Left I am Uday doing React Course"} />
      </SplitScreen>
      <UserLoader sourceName="author" endurl="/current-user">
        <LargeAuthorListItem />
      </UserLoader>
      <UserLoader sourceName="items" endurl="/users">
        <RegularList
          sourceName={"author"}
          ItemComponent={LargeAuthorListItem}
        />
      </UserLoader>
      <UserRenderPropsLoader
        sourceName="items"
        endurl="/books"
        render={(items) => (
          <RegularList
            items={items}
            sourceName={"book"}
            ItemComponent={LargeBookListItem}
          />
        )}
      />
      <UserLoader sourceName="items" endurl="/users">
        <NumberedList
          items={authors}
          sourceName={"author"}
          ItemComponent={LargeAuthorListItem}
        />
      </UserLoader>
      <UserRenderPropsLoader
        sourceName="items"
        endurl="/books"
        render={(items) => (
          <NumberedList
            items={items}
            sourceName={"book"}
            ItemComponent={LargeBookListItem}
          />
        )}
      />
    </>
  );
}

export default App;
