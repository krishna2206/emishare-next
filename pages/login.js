import Head from 'next/head';
import Common from '../components/common';

export default function login() {
    return (
        <div>
            <Head>
                <title>Sign in to Emishare - Emishare</title>
                <Common />
            </Head>

            <main>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="d-flex flex-column align-items-center bg-light rounded-20">
                        <div className="d-flex flex-row align-content-center mb-4 gap-3">
                            <img src="{{ asset('images/login-logo.png') }}" width={64} />
                        </div>
                        <p>
                            Se connecter à votre compte Emishare
                        </p>

                        <form className="login-form py-5">
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="formMail" className="form-control" required />
                                <label className="form-label" htmlFor="formMail">
                                    Addresse email
                                </label>
                            </div>

                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="formPassword" className="form-control" required />
                                <label className="form-label" htmlFor="formPassword">
                                    Mot de passe
                                </label>
                            </div>

                            <div className="row mb-5">
                                <div className="col d-flex justify-content-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="formRemember" checked />
                                        <label className="form-check-label" htmlFor="formRemember">
                                            Se souvenir de moi
                                        </label>
                                    </div>
                                </div>

                                <div className="col">
                                    <a href="#!">Mode de passe oublié ?</a>
                                </div>
                            </div>

                            {/* Submit button */}
                            <button type="button" className="btn btn-primary btn-block" style={{ height: "50px", fontSize: "1em" }}>
                                SE CONNECTER
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
