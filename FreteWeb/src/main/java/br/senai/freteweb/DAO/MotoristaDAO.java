/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senai.freteweb.DAO;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author Ricardo
 */
@Stateless 
public class MotoristaDAO {
    
    @PersistenceContext(unitName = "freteWebPU")
    private EntityManager em;
    
}
