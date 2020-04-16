import Link from "next/link";
import useAuth from "../hooks/useAuth";
import AuthService from "../services/auth";

export default (props) => {
    const user = useAuth(props.user);

    return (
        <>
            <h1 className="title">{user._id ? `Bonjour ${user.name}` : "Hello, welcome"}</h1>
            <a href="/login">Login</a>
            <Link href="/login">
                <button>also login</button>
            </Link>
        </>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {
            user: await AuthService.getUserFromCookie(context.req)
        }
    }
};