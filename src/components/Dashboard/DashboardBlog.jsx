import { Link } from "react-router-dom";

function DashboardBlog() {
  return (
    <div className="dashBlog__content">
      <div className="dashBlog__header">
        <div className="dashBlog__header__text">
          <p className="dashBlog__header__section-name">Editorial Aromatik</p>
          <p className="dashBlog__header__title">
            Conteúdos selecionados para inspirar sua jornada
          </p>
        </div>
        <Link className="dashBlog__header__cta" to="/blog">
          Ver todos os artigos →
        </Link>
      </div>
      <div className="dashBlog__container">
        <div className="dashBlog__post">
          <div className="dashBlog__image-analise"></div>
          <div className="dashBlog__overlay"></div>
          <div className="dashBlog__texts">
            <p className="dashBlog__post__tag-analise">análise</p>
            <h2 className="dashBlog__post__title">
              Cebolinha Jequiti: por que viralizou?
            </h2>
            <h3 className="dashBlog__post__subtitle">
              O perfume de R$50 que esgotou o Brasil.
            </h3>
            <p className="dashBlog__post__time">5 min de leitura</p>
          </div>
          <div className="dashBlog__image"></div>
        </div>
        <div className="dashBlog__post">
          <div className="dashBlog__image-guide"></div>
          <div className="dashBlog__overlay"></div>
          <div className="dashBlog__texts">
            <p className="dashBlog__post__tag-guide">guia</p>
            <h2 className="dashBlog__post__title">
              Como escolher o próximo perfume da coleção
            </h2>
            <h3 className="dashBlog__post__subtitle">
              Um guia para entender as lacunas e evoluir seu perfil olfativo.
            </h3>
            <p className="dashBlog__post__time">7 min de leitura</p>
          </div>
          <div className="dashBlog__image"></div>
        </div>
        <div className="dashBlog__post">
          <div className="dashBlog__image-tendencies"></div>
          <div className="dashBlog__overlay"></div>
          <div className="dashBlog__texts">
            <p className="dashBlog__post__tag-tendencies">tendências</p>
            <h2 className="dashBlog__post__title">
              As famílias olfativas que mais crescem em 2026
            </h2>
            <h3 className="dashBlog__post__subtitle">
              Do aquático moderno ao gourmand sofisticado: o que está em alta.
            </h3>
            <p className="dashBlog__post__time">6 min de leitura</p>
          </div>
          <div className="dashBlog__image"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardBlog;
