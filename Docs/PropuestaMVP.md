# Propuesta de MVP

**Propuesta de MVP enfocada en el núcleo del proceso de venta y gestión básica:**

## Funcionalidades Clave del MVP (Minimum Viable Product):

### Módulo Principal de Venta (Frontend - Lo esencial):

- **Agregar productos a la transacción:**
  - Búsqueda rápida de productos por nombre o código/SKU.
  - Selección de la variante correcta (talla, color, etc.) después de encontrar el producto. Es vital que desde el MVP la estructura de datos soporte variantes, aunque la gestión avanzada de inventario por variante venga después.
  - Modificar cantidad de un producto en la transacción.
  - Calcular el total de la venta.
- **Procesar Pagos Simples:**
  - Aceptar uno o dos métodos de pago básicos (ej. Efectivo, Tarjeta de Crédito/Débito genérico, sin integración con TPVs específicos todavía). La funcionalidad de tarjeta podría ser simplemente registrar "Pago con Tarjeta" y el monto, asumiendo que se usa un TPV externo tradicional.
  - Calcular el cambio para pagos en efectivo.
  - Cerrar la venta.
- **Imprimir Recibo Básico:** Generar un recibo simple con los ítems comprados, cantidades, precios y total.
- **Funcionalidad Mínima de Turno:** Inicio y fin de un turno de caja (quizás solo registrando la hora, sin arqueo detallado todavía).

### Módulo de Gestión de Productos (Backend - Lo indispensable):

- Crear, editar y eliminar productos base.
- Definir opciones de variantes (ej. Talla, Color) y sus valores.
- Crear combinaciones de variantes (ej. Camiseta Roja Talla M) asociadas a un producto base.
- Asignar un SKU/Código único a cada combinación de variante.
- Asignar un precio de venta a cada combinación de variante (o heredar del producto base).
- Asignar un costo a cada combinación de variante (opcional en MVP, pero útil para futuros reportes de margen).

### Módulo de Gestión de Inventario (Backend - Lo fundamental):

- Establecer una cantidad de stock inicial por cada combinación de variante.
- Decrementar automáticamente el stock de la variante correspondiente cada vez que se cierra una venta.

### Módulo Básico de Informes (Backend - Visibilidad esencial):

- Ver una lista de transacciones de ventas completadas.
- Calcular el total de ventas en un período simple (ej. Ventas del día, Ventas del turno actual).

### Módulo Básico de Usuarios:

- Un tipo de usuario (ej. Administrador/Cajero con acceso total al MVP). La gestión de roles y permisos detallada viene después.
- Funcionalidad de login/logout.

## Funcionalidades EXCLUIDAS del MVP (para Fases Posteriores):

- **Funcionalidades avanzadas de venta:** Descuentos complejos (por línea, promociones), anulación de ítems individuales (solo anular transacción completa), transacciones pendientes, división de pagos detallada.
- **Gestión de Devoluciones y Cambios.**
- **Gestión avanzada de Inventario:** Ajustes manuales detallados con motivo, recepción de mercancía formal, transferencias, alertas de bajo stock, conteo físico, historial de movimientos.
- **Gestión de Clientes (CRM):** Perfiles detallados, historial de compras asociado al cliente, puntos de fidelidad.
- **Informes detallados:** Ventas por producto/variante, ventas por método de pago, reportes de inventario detallados, reportes de ganancias, reportes de impuestos.
- **Gestión detallada de Usuarios y Roles/Permisos.**
- **Integración con Hardware específico:** Conexión directa con impresoras específicas (quizás solo imprimir a la impresora predeterminada del SO), escáneres (quizás solo captura manual del código), TPVs integrados, cajón de dinero.
- **Integraciones con Software Externo:** E-commerce, Contabilidad, Pasarelas de pago avanzadas.
- **Modo Offline.**
- **Módulo de gestión de proveedores y órdenes de compra.**

## Justificación del MVP:

Este conjunto mínimo de funcionalidades permite que la tienda pueda:

- Registrar una venta de manera funcional.
- Seleccionar la variante correcta (S, M, L, Rojo, Azul).
- Saber cuánto dinero entró por ventas.
- Saber aproximadamente cuántas unidades de cada variante le quedan (el stock se descuenta, aunque no se ajuste por otros motivos).

Es la espina dorsal del sistema. Una vez que esto funcione de manera estable y los usuarios puedan operar sus ventas diarias con él, se puede pasar a añadir las capas de complejidad y automatización (devoluciones, inventario completo, CRM, integraciones, etc.).

Con este MVP definido, podemos pasar a la siguiente parte de la planificación: el diseño de la arquitectura y la base de datos, teniendo en cuenta que deberemos expandirla para las futuras funcionalidades.