/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senai.freteweb.DAO;

import br.senai.freteweb.model.Motorista;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

/**
 *
 * @author Ricardo
 */

@Stateless 
public class MotoristaDAO {
    
    @PersistenceContext(unitName = "freteWebPU")
    private EntityManager em;
    
    public void insere(Motorista motorita){
        em.persist(motorita);
    }
    
    public void excluir(Long id){
        em.remove(em.getReference(Motorista.class, id));
    }
    
    public Motorista buscar(Long id){
        return em.find(Motorista.class, id);
    }
    
    public Motorista atualizar(Motorista motorista){
        return em.merge(motorista);
    }
    
    public List<Motorista> listar(){
        TypedQuery<Motorista> q = em.createQuery("Select m "
            + "From Motorista m Order by m.nome", Motorista.class);
                    
        return q.getResultList();
    }        
}
