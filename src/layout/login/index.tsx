import {FC} from "react";

interface LoginLayoutProps{
    Form: FC;
}

const Login_Layout:FC<LoginLayoutProps>= ({Form}) =>{
    return(
        <main className="relative w-[100vw] h-[100vh] p-[50px] bg-primary flex flex-row box-border">
            <section className="bg-white w-3/4 flex justify-center rounded-md items-center">
                <img src="/img/meta-img.svg" className="max-w-full h-auto" alt="" />
            </section>
            <section className="w-full min-h-full bg-white rounded-r flex justify-center items-center">
                <Form/>
            </section>
        </main>
    );
}

export default Login_Layout;