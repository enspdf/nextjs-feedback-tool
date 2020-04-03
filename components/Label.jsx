import React from "react";

export default props => (
    <>
        <div className="label-group">
            <label className="label" {...props} />
            {props.error && (
                <>
                    <span className="error">is {props.error}</span>
                </>
            )}
        </div>
        {props.help && <p className="label__help">{props.help}</p>}
        <style jsx>{`
            .label {
                font-weight: bold;
            }

            .label__help {
                font-size: 0.75rem;
            }
        `}</style>
    </>
);