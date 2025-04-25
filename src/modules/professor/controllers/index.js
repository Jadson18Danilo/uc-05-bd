import ProfessorModel from "../models/index.js"; 

class ProfessorController{
    static async criar(nome, matricula, cod_curso){
        try {
            if(!nome || !matricula){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const professor = await AlunoModel.criar(nome, matricula, cod_curso)
            console.log('Professor criado com sucesso!')
            return professor
        } catch (error) {
            console.log('Erro ao criar professor:', error.message)
        }
    }
    static async editar(nome, matricula, cod_curso){
        try {
            if(!nome || !matricula){
                return console.error('Todos os campos devem ser preenchidos!')
            }
            const professor = await ProfessorModel.atualizarProfessor(nome, matricula, cod_curso)
            if(professor.length === 0){
                return console.error('Professor não encontrado!')
            }
            console.log('Professor atualizado com sucesso!')
            return professor
        } catch (error) {
            console.log('Erro ao atualizar o professor:', error.message)
        }
    }
    static async deletarProfessor(matricula){
        try {
            const professor = await ProfessorModel.listarPorEmail(matricula)
            if(professor.length === 0){
                return console.error('Professor não encontrado!')
            }
            await ProfessorModel.deletarProfessor(matricula)
            console.log('Professor excluido com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir o professor:', error.message)
        }
    }
    static async deletarTodos(){
        try {
            await ProfessorModel.deletarTodos()
            console.log('Professors excluidos com sucesso!')
        } catch (error) {
            console.log('Erro ao excluir todos os Professors:', error.message)
        }
    }
    static async listarTodos(){
        try {
            const professores = await ProfessorModel.listarTodos()
            if(professores.length === 0){
                return console.log('Nenhum usuario a ser exibido!')
            }
            console.log('Listagem de Professors:')
            return professores
        } catch (error) {
            console.log('Erro ao listar todos os professors:', error.message)
        }
    }
    static async listarPorMatricula(matricula){
        try {
            const professor = await ProfessorModel.listarPorMatricula(matricula)
            if(professor.length === 0){
                return console.error('Professor não encontrado!')
            }
            console.log('Professor:')
            return professor
        } catch (error) {
            console.log('Erro ao listar todos os Professors:', error.message)
        }
    }
    static async totalProfessores(){
        try {
            const total = await ProfessorModel.totalProfessor()
            if(total.length === 0){
                return console.error('Não há professores na contagem!')
            }
            return total
        } catch (error) {
            console.log('Erro ao contar todos os professores:', error.message)
        }
    }


}

export default ProfessorController