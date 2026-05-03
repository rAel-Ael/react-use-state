
const bottoneClasse = 'btn-warning';
function Card({
    buttonTitle = `TitoloDef`,
    buttonContent = `DescrizioneDef`
}) {
    return <> <div className="card">
        <div className="card-body">
            <button className={`btn ${bottoneClasse}`}>{buttonTitle}</button>
            <p className="card-text">{buttonContent}</p>
        </div>
    </div>
    </>
}
export default Card;