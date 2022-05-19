import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth === null ? (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-danger" onClick={onLogOut}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
