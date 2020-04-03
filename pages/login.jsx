import { useState, useReducer } from "react";

import Button from "../components/Button";
import Field from "../components/Field";
import Input from "../components/Input";
import Label from "../components/Label";
import EmailService from "../services/email";
import fetch from "isomorphic-unfetch";

function reducer(state, action) {
    let error;
    switch (action.type) {
        case "update-name":
            error = action.value?.length < 2 ? "not valid" : undefined;

            return {
                ...state,
                name: action.value,
                errors: { ...state.errors, name: error }
            };
        case "update-password":
            error = action.value?.length < 6 ? "too short" : undefined;

            return {
                ...state,
                password: action.value,
                errors: { ...state.errors, password: error }
            };
        case "update-email":
            error = !EmailService.valid(action.value) ? "not valid" : undefined;

            return {
                ...state,
                email: action.value,
                errors: { ...state.errors, email: error }
            };
        default:
            return state;
    }

    return state;
}

export default () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [state, dispatch] = useReducer(reducer, {});
    const hasError = () => {
        if (isSignUp) {
            return (
                !(state.name && state.email && state.password) ||
                state.errors.name !== undefined ||
                state.errors.password !== undefined ||
                state.errors.email !== undefined
            );
        } else {
            return (
                !(state.email && state.password) ||
                state.errors.password !== undefined ||
                state.errors.email !== undefined
            );
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const request = await fetch("/api/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...state,
                isSignUp
            })
        });

        if (request.ok) {

        } else {
            const error = await request.text();
        }
    };

    return (
        <>
            <div className="page">
                <form className="form" onSubmit={handleSubmit}>
                    {isSignUp && (
                        <Field>
                            <Label error={state.errors?.name}>Name</Label>
                            <Input
                                name="name"
                                type="text"
                                value={state.name}
                                onChange={({ target }) =>
                                    dispatch({ type: "update-name", value: target.value })
                                }
                            />
                        </Field>
                    )}
                    <Field>
                        <Label error={state.errors?.email}>Email</Label>
                        <Input
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={({ target }) =>
                                dispatch({ type: "update-email", value: target.value })
                            }
                        />
                    </Field>
                    <Field>
                        <Label error={state.errors?.password}>Password</Label>
                        <Input
                            name="password"
                            type="password"
                            value={state.password}
                            onChange={({ target }) =>
                                dispatch({ type: "update-password", value: target.value })
                            }
                        />
                    </Field>
                    <Button disabled={hasError()}>
                        {isSignUp ? "Sign up" : "Log in"}
                    </Button>
                    <p className="log-in-prompt">
                        {isSignUp ? "Have" : "Need"} an account?
                    <span className="small">
                            Click below, fill out the form, et voila!
                    </span>
                    </p>
                    <Button onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Log in" : "Sign up"}
                    </Button>
                    <p className="error">{"errors?.auth"}</p>
                </form>
            </div>
            <style jsx>{`
                .error {
                text-align: center;
                color: var(--pink);
                }

                .page {
                width: 100%;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                }

                .log-in-prompt {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 0.25rm;
                }

                .log-in-prompt > .small {
                font-size: 0.75rem;
                opacity: 0.6;
                }

                .form {
                display: flex;
                flex-direction: column;
                width: 300px;
                }

                .form > :global(.field),
                .form > :global(.btn) {
                margin-bottom: 0.5rem;
                }
            `}</style>
        </>
    );
};
