package com.vacunacion.inventario.model;

import javax.persistence.*;


@Entity
@Table(name = "usuarios")
public class Usuarios {
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;
    
    
    
    private String cedula;
    private String nombres;
    private String apellidos;
    private String email;
    private String fechanacimiento;
    private String direcciondomicilio;
    private String telefonomovil;
    private boolean estadovacuna;
    private String tipovacuna;
    private String fechavacuna;
    private int numerodosis;

    public Usuarios() {
    }
    
  
    public Usuarios(String cedula, String nombres, String apellidos, String email, String fechanacimiento, String direcciondomicilio, String telefonomovil, boolean estadovacuna, String tipovacuna, String fechavacuna, int numerodosis) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.fechanacimiento = fechanacimiento;
        this.direcciondomicilio = direcciondomicilio;
        this.telefonomovil = telefonomovil;
        this.estadovacuna = estadovacuna;
        this.tipovacuna = tipovacuna;
        this.fechavacuna = fechavacuna;
        this.numerodosis = numerodosis;
    }
    
   

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFechanacimiento() {
        return fechanacimiento;
    }

    public void setFechanacimiento(String fechanacimiento) {
        this.fechanacimiento = fechanacimiento;
    }

    public String getDirecciondomicilio() {
        return direcciondomicilio;
    }

    public void setDirecciondomicilio(String direcciondomicilio) {
        this.direcciondomicilio = direcciondomicilio;
    }

    public String getTelefonomovil() {
        return telefonomovil;
    }

    public void setTelefonomovil(String telefonomovil) {
        this.telefonomovil = telefonomovil;
    }

    public boolean isEstadovacuna() {
        return estadovacuna;
    }

    public void setEstadovacuna(boolean estadovacuna) {
        this.estadovacuna = estadovacuna;
    }

    public String getTipovacuna() {
        return tipovacuna;
    }

    public void setTipovacuna(String tipovacuna) {
        this.tipovacuna = tipovacuna;
    }

    public String getFechavacuna() {
        return fechavacuna;
    }

    public void setFechavacuna(String fechavacuna) {
        this.fechavacuna = fechavacuna;
    }

    public int getNumerodosis() {
        return numerodosis;
    }

    public void setNumerodosis(int numerodosis) {
        this.numerodosis = numerodosis;
    }
    
    }
    