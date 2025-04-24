import ProfessorController from "../controllers/index.js";
import prompt from 'prompt-sync'

const input = prompt()
class ProfessorView {
  static async criar() {
    const nome = input("Digite o nome do professor: ");
    const matricula = input("Digite a matrícula do professor: ");
    const cod_turma = input("Digite o código da turma: ");
    const professor = await ProfessorController.criar(
      nome,
      matricula,
      cod_turma
    );
    console.table(professor);
  }
  static async editarprofessor(nome, matricula, cod_turma) {
    const professor = await ProfessorController.editar(
      nome,
      matricula,
      cod_turma
    ); 
    console.table(professor);
  }
  static async listarTodos() {
    const professores = await ProfessorController.listarTodos();
    console.table(professores);
  }
  static async listarPorMatricula(matricula) {
    const professor = await ProfessorController.listarPorMatricula(matricula);
    console.table(professor);
  }
  static async deletarTodos() {
    await ProfessorController.deletarTodos();
  }
  static async deletarProfessor(matricula) {
    await ProfessorController.deletarProfessor(matricula);
  }
  static async totalProfessores() {
    const total = await ProfessorController.totalProfessores();
    console.table(total);
  }
}

export default ProfessorView;
