using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {

        protected readonly QuickBuyContexto QuickBuContexto;

        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuContexto = quickBuyContexto;
        }

        public void Adicionar(TEntity entity)
        {
            QuickBuContexto.Set<TEntity>().Add(entity);
            QuickBuContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuContexto.Set<TEntity>().Update(entity);
            QuickBuContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return QuickBuContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickBuContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            QuickBuContexto.Remove(entity);
            QuickBuContexto.SaveChanges();
        }

        public void Dispose()
        {
            QuickBuContexto.Dispose();
        }
    }
}
