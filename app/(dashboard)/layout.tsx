import { Header } from "@/components/header";

type Props={
    children :React.ReactNode;
};


// every future route has a common layout here 

const DashBoardLayout = ({children} : Props)=>{
    return(
        <>
        <Header></Header>
        <main className="px-3 lg:px-14">
            {children}
        </main>
        </>
    );
}

export default DashBoardLayout

