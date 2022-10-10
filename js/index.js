

//const todoForm = document.getElementsByTagName("form")[0]->o metodo retorna um array e podemos acessar a posição assim. //Recupera elementos HTML a partir do nome da tag

const todoForm = document.getElementById("todo-form")//Recupera o elemento pelo Id
const todos = []

/**addEventListener serve para ouvir eventos de elementos HTML sempre que forem emitidos
 * 
 * fuction -> é uma função anônima.
 */

todoForm.addEventListener("submit", function (evento) {
    /**
     * cancela o carregamento padrão de um formulario que seria o recarregamento
     */

    evento.preventDefault()

    /**
    * cancela a propagação do evento que foi emitido para os elementos pai,
    * evitando que outros eventos sejam emitidos
    */
    evento.stopPropagation()

    const todoInput = document.querySelector("#todo")
    /**
     *  querySelector -> recupera o primeiro elemento que atenda a um seletor CSS informado
     */
    todos.push(todoInput.value)
    todoInput.value = " "

    redenrizarTodos()
})

function redenrizarTodos() {
    const todosListSection = document.querySelector("#todos-list")
    todosListSection.innerHTML = " "

    for (let tarefa of todos) {
        /**createElement é o metodo responsavel por gerar novos elementos HTML dentro do JS a partir do nome das tags*/
        const divCard = document.createElement("div")
        divCard.classList.add("card", "bg-warming")

        const divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body", "d-flex", "align-itens-center")

        const pTodoText = document.createElement("p")
        pTodoText.classList.add("todo-text", "flex-grow-1", "text-truncate")
        pTodoText.innerText = tarefa
        /**innerText é a propriedade que informa qual o conteúdo de texto que está dentro de um elemento HTML */

        const btnDelete = document.createElement("button")
        btnDelete.classList.add("btn", "delete-todo")
        /**Arrow function SEMPRE são anônimas */
        btnDelete.addEventListener("click", () => {
            /**descobrir o índice do elemento dentro do array */
            /**indexOf -> informa em qual indice se encontra um valor determinado dentro do array 
             * 
             * se ele não achar o valor dentro do array, ele retornará -1
            */
            const index = todos.indexOf(tarefa)
            /**splice serve para excluir um determinado valor do seu array a partir do seu indice */
            todos.splice(index,1)
            redenrizarTodos()
        })

        const spanIcon = document.createElement("span")
        spanIcon.classList.add("material-symbols-outlined")
        spanIcon.innerText = "delete"

        /**appendChild serve para colocar um novo elemento HTML dentro de outro */
        btnDelete.appendChild(spanIcon)
        /**append serve para colocar um ou mais elementos HTML dentro de outro  */
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
}