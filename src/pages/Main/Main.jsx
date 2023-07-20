import style from "./Main.module.css";
import MainNav from "../../components/MainNav/MainNav";
import MainCenterBlock from "../../components/MainCenterBlock/MainCenterBlock";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
import MainBar from "../../components/MainBar/MainBar";

function Main({ loading, allTrack}) {

  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav />
        <MainCenterBlock loading={loading} allTrack={allTrack} />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        <MainBar loading={loading} />
      </div>
    </div>
  );
}

export default Main;