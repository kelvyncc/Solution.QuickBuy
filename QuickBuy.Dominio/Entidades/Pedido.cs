 using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }


        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }


        public DateTime DataPrevisaoEntega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }


        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }



        //PEDIDO DEVER TER PELO MENOS UM ITEm DE PEDIDO OU MUITOS ITENS DE PEDIDOS
        public virtual ICollection<ItemPedido> ItensPedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedidos.Any())
                AdicionarMensagem("Pedido não pode ficar sem item do pedido");
            if (string.IsNullOrEmpty(CEP))
                AdicionarMensagem("CEP deve estar preenchido");
            if (FormaPagamentoId == 0)
                AdicionarMensagem("Não foi definido a forma de pagamento");





        }
    }
}
