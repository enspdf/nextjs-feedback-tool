import Link from "next/link";

export default () => (
    <>
        <h1 className="title">Hello</h1>
        <a href="/login">Login</a>
        <Link href="/login">
            <button>also login</button>
        </Link>
    </>
);