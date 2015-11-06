/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senai.freteweb.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Ricardo
 */

@Entity
@Table(name = "MOTORISTA")
public class Motorista implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer     Id;
    
    @Column(name="nome", nullable = false, length = 100)
    private String      nome;
    
    @Column(name="inscricao", nullable = false, length = 11)
    private Integer     inscricao;
    
    @Column(name="email", nullable = true, length = 100)
    private String      email;
    
    @Column(name="endereco", nullable = false, length = 100)
    private String      endereco;
    
    @Column(name="cidade", nullable = false, length = 100)
    private String      cidade;
    
    @Column(name="cep", nullable = false, length = 100)
    private Integer     cep;
    
    @Column(name="estado", nullable = false, length = 100)
    private String      estado;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer Id) {
        this.Id = Id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getInscricao() {
        return inscricao;
    }

    public void setInscricao(Integer inscricao) {
        this.inscricao = inscricao;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }        
    
}
