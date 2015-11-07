/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senai.freteweb.MotoristaREST;

import br.senai.freteweb.DAO.MotoristaDAO;
import br.senai.freteweb.model.Motorista;
import java.util.List;
import java.util.Objects;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityNotFoundException;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author elton
 */

@Stateless
@Path("motorista")
@Produces(MediaType.APPLICATION_JSON)
public class MotoristaResource {
    
    @Inject
    private MotoristaDAO motoristaDAO;
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Motorista inserir(Motorista m){
        motoristaDAO.insere(m);
        return m;
    }
    
    @GET
    public List<Motorista> listar(){
        return motoristaDAO.listar();
    }
    
    @DELETE
    @Path("{id}")
    public void deletar(@PathParam("id") Long id){
        motoristaDAO.excluir(id);
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Motorista atualizar(@PathParam("id") Long id, Motorista m){
        if(!Objects.equals(id, m.getId())){
            throw new WebApplicationException(Response.Status.BAD_REQUEST);
        }
        return motoristaDAO.atualizar(m);
    }
    
    @GET
    @Path("{id}")    
    public Response buscar(@PathParam("id") Long id){
        final Motorista m = motoristaDAO.buscar(id);
        if(m == null){
           throw new EntityNotFoundException();
        } 
        return Response.ok(m).build();
    }
    
   /* @GET  
    public Response buscarPorNome(@QueryParam("nome") String nome){
        final List<Motorista> l = motoristaDAO.buscarPorNome(nome);
        if(l == null){
           throw new EntityNotFoundException();
        } 
        return Response.ok(l).build();
    }*/
    
}
