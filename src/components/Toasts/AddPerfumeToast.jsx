function AddPerfumeToast({ perfumeName }) {
  return (
    <div
      className={`AddPerfumeToast AddPerfumeToast--success`}
      role="status"
      aria-live={"assertive"}
      aria-busy={undefined}
    >
      <span className="AddPerfumeToast__icon">
        <span className="AddPerfumeToast__check" aria-hidden="true">
          ✓
        </span>
      </span>

      <span className="AddPerfumeToast__body">
        <span className="AddPerfumeToast__text">
          Perfume adicionado:{" "}
          <span className="AddPerfumeToast__hl">{perfumeName}</span>
        </span>
        <span className="AddPerfumeToast__sub">Agora na sua coleção</span>
      </span>
    </div>
  );
}

export default AddPerfumeToast;
