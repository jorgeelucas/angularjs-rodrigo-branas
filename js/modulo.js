angular.module("ListaTelefonica", []);
angular.module("ListaTelefonica").controller("ListaController", function($scope){
  $scope.message = "agenda";

  $scope.contatos = [];

  $scope.operadoras = [
    {nome: "Oi", codigo: "41", categoria: "Celular"},
    {nome: "Vivo", codigo: "35", categoria: "Celular"},
    {nome: "Claro", codigo: "12", categoria: "Celular"},
    {nome: "Tim", codigo: "13", categoria: "Celular"},
    {nome: "Embratel", codigo: "21", categoria: "Fixo"},
    {nome: "GVT", codigo: "14", categoria: "Fixo"}
  ];

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function(contato) {
      return contato.selecionado;
    })
  }

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado)  return contato;
    });

  }

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  }

});
