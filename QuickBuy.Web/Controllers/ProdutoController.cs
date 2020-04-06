using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.Web.Controllers
{

    //prestar atenção
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtorepositorio;


        public ProdutoController(IProdutoRepositorio produtorepositorio)
        {
            _produtorepositorio = produtorepositorio;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtorepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                _produtorepositorio.Adicionar(produto);
                return Created("api/produto", produto);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }





    }
}
