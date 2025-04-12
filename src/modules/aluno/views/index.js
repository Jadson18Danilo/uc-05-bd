import AlunoController from '../controllers/index.js' 

class AlunoView{
    static async criar(nome, email, matricula, telefone, cod_turma){
        const aluno = await AlunoController.criar(nome, email, matricula, telefone, cod_turma)
        console.table(aluno)
    }
    static async editarAluno(nome, email, matricula, telefone, cod_turma){
        const aluno = await AlunoController.editar(nome, email, matricula, telefone, cod_turma)
        console.table(aluno)
    }
    static async listarTodos(){
        const alunos = await AlunoController.listarTodos()
        console.table(alunos)
    }
    static async listarPorEmail(email){
        const aluno = await AlunoController.listarPorEmail(email)
        console.table(aluno)
    }
    static async deletarTodos(){
        await AlunoController.deletarTodos()
    }
    static async deletarAluno(email){
        await AlunoController.deletarAluno(email)
    }
    static async totalAlunos(){
        const total = await AlunoController.totalAlunos()
        console.table(total)
    }
}

export default AlunoView