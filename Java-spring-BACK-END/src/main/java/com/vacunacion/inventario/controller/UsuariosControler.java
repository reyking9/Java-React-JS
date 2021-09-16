
package com.vacunacion.inventario.controller;


import com.vacunacion.inventario.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.vacunacion.inventario.model.Usuarios;
import com.vacunacion.inventario.repository.UsuariosRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/test")

public class UsuariosControler {
    @Autowired
    private UsuariosRepository usuariosRepository;
    
    @GetMapping("/usuarios")
   public List<Usuarios> getAllUsuarios(){
       return usuariosRepository.findAll();
}
   @PostMapping("/usuarios")
   public Usuarios createUsuarios(@RequestBody Usuarios usuarios){
       return usuariosRepository.save(usuarios);
   }
   @DeleteMapping("/usuarios/{id}")
   public ResponseEntity<Map<String, Boolean>> deleteUsuarios(@PathVariable Long id){
       Usuarios usuarios = usuariosRepository.findById(id)
               .orElseThrow(() -> new ResourceNotFoundException("No existe un usuario con el ID :" + id));
       usuariosRepository.delete(usuarios);
       Map<String, Boolean> response = new HashMap<>();
       response.put("deleted", Boolean.TRUE);
       return ResponseEntity.ok(response);
   }
   
   @GetMapping("/usuarios/{id}")
   public ResponseEntity<Usuarios> getUsuariosById(@PathVariable Long id)
   {
       Usuarios usuarios = usuariosRepository.findById(id)
               .orElseThrow(() -> new ResourceNotFoundException("No existe un usuario con el ID:" + id));
       return ResponseEntity.ok(usuarios);
       
   }
   
   @PutMapping("/usuarios/{id}")
   public ResponseEntity<Usuarios> updateUsuarios(@PathVariable Long id, @RequestBody Usuarios usuariosDetails)
   { Usuarios usuarios = usuariosRepository.findById(id)
               .orElseThrow(() -> new ResourceNotFoundException("No existe un usuario con el ID :" + id));
   usuarios.setCedula(usuariosDetails.getCedula());
   usuarios.setNombres(usuariosDetails.getNombres());
   usuarios.setApellidos(usuariosDetails.getApellidos());
   usuarios.setEmail(usuariosDetails.getEmail());
   usuarios.setFechanacimiento(usuariosDetails.getFechanacimiento());
   usuarios.setDirecciondomicilio(usuariosDetails.getDirecciondomicilio());
   usuarios.setTelefonomovil(usuariosDetails.getTelefonomovil());
   usuarios.setEstadovacuna(usuariosDetails.isEstadovacuna());
   usuarios.setTipovacuna(usuariosDetails.getTipovacuna());
   usuarios.setFechavacuna(usuariosDetails.getFechavacuna());
   usuarios.setNumerodosis(usuariosDetails.getNumerodosis());
   
   Usuarios updateUsuarios = usuariosRepository.save(usuarios);
   return ResponseEntity.ok(updateUsuarios);
   }
   
   
   
}
