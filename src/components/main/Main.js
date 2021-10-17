import hello from '../../assets/hello.svg';
// src\assets\hello.svg
import Chart from '../charts/Chart';

import './Main.css';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" className="" />
                    <div className="main__greeting">
                        <h1>Olá Wall</h1>
                        <p>Bem-vindo ao Dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card main__card1">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">480</span>
                        </div>
                    </div>

                    <div className="card main__card2">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$4.876</span>
                        </div>
                    </div>

                    <div className="card main__card3">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de Produtos</p>
                            <span className="font-bold text-title">680</span>
                        </div>
                    </div>

                    <div className="card main__card4">
                        <i className="fa fa-bars fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">35</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Fortaleza, Ceará, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Fortaleza, Ceará, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Lucro</h1>
                                <p>R$2.500</p>
                            </div>

                            <div className="card2">
                                <h1>Pagamentos</h1>
                                <p>R$250</p>
                            </div>

                            <div className="card3">
                                <h1>Custo de hospedagem</h1>
                                <p>R$270</p>
                            </div>

                            <div className="card4">
                                <h1>Banco de Dados</h1>
                                <p>R$5000</p>
                            </div>
                        </div> {/* close .charts__right__cards*/}
                    </div>{/* close .charts__right*/}
                </div>
            </div>
        </main>
    );
};

export default Main;