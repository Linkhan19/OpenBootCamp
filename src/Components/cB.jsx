
const CompoB = ({ contacts }) => {

    return (
        <div>
            <div>
                <h2>
                    The user: <strong>{ contacts.name }</strong>
                </h2>
                <h2>
                    Description: <strong>{ contacts.description }</strong>
                </h2>
                <h2>
                    Email: <strong>{ contacts.email }</strong>
                </h2>
                <h2>
                    Conectado: <strong>{ contacts.conect ? 'Conected' : 'Disconected' }</strong>
                </h2>
            </div>
        </div>
    );
}


export default CompoB;