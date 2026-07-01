import permanaCoin from "../../images/brand/logo-coin/permana-coin-default-264.png";

const MOTES = [
  { left: "14%", top: "58%", delay: "60ms" },
  { left: "30%", top: "30%", delay: "320ms" },
  { left: "50%", top: "66%", delay: "150ms" },
  { left: "70%", top: "26%", delay: "440ms" },
  { left: "86%", top: "54%", delay: "240ms" },
  { left: "62%", top: "48%", delay: "520ms" },
];

export function CadastroFeedback({ status = "loading", nome }) {
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";

  const primeiroNome = (nome || "").trim().split(/\s+/)[0];

  return (
    <div className="cadastroFeedback__scrim" role="presentation">
      <div
        className={
          "cadastroFeedback cadastroFeedback--" +
          status +
          " cadastroFeedback__card"
        }
        role="status"
        aria-live="polite"
        aria-busy={isLoading ? "true" : undefined}
      >
        <div className="cadastroFeedback__coinwrap">
          {isLoading && (
            <>
              <span
                className="cadastroFeedback__halo"
                aria-hidden="true"
              ></span>
              <span
                className="cadastroFeedback__halo cadastroFeedback__halo--delayed"
                aria-hidden="true"
              ></span>
            </>
          )}
          {isSuccess && (
            <>
              <span
                className="cadastroFeedback__glow"
                aria-hidden="true"
              ></span>
              <span
                className="cadastroFeedback__ripple"
                aria-hidden="true"
              ></span>
              <span
                className="cadastroFeedback__ripple cadastroFeedback__ripple--2"
                aria-hidden="true"
              ></span>
              {MOTES.map((mote, index) => (
                <span
                  key={index}
                  className="cadastroFeedback__mote"
                  style={{
                    left: mote.left,
                    top: mote.top,
                    animationDelay: mote.delay,
                  }}
                  aria-hidden="true"
                ></span>
              ))}
            </>
          )}
          <img
            src={permanaCoin}
            alt=""
            className="cadastroFeedback__coin"
            width={140}
            height={140}
          />
          {isSuccess && (
            <span className="cadastroFeedback__badge" aria-hidden="true">
              ✓
            </span>
          )}
          {isError && (
            <span className="cadastroFeedback__badge" aria-hidden="true">
              !
            </span>
          )}
        </div>

        <div className="cadastroFeedback__text">
          {isSuccess && (
            <span className="cadastroFeedback__eyebrow">
              BEM-VINDO À PERMANA
            </span>
          )}

          <h2 className="cadastroFeedback__title">
            {isLoading && "Criando sua conta"}
            {isSuccess && "Conta criada."}
            {isError && "Não foi possível criar sua conta."}
          </h2>

          <p className="cadastroFeedback__msg">
            {isLoading &&
              "O servidor está saindo do repouso. Isso leva alguns segundos."}
            {isSuccess &&
              (primeiroNome ? (
                <>
                  Sua identidade olfativa começa agora, <b>{primeiroNome}</b>.
                </>
              ) : (
                <>Sua identidade olfativa começa agora.</>
              ))}
            {isError &&
              "Algo falhou no caminho. Seus dados estão a salvo. É só tentar de novo."}
          </p>
        </div>

        {isLoading && (
          <span className="cadastroFeedback__dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        )}
      </div>
    </div>
  );
}

export default CadastroFeedback;
