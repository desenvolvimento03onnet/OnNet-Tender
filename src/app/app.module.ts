import { ModalEditarCategoriaComponent } from 'app/modal/modal-editar/modal-editar-categoria/modal-editar-categoria.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ServiceModalUpdateProduto } from 'app/services/show-modal/update-remove/service.modal-produto';
import { ServiceModalUpdateCategoria } from './services/show-modal/update-remove/service.modal-categoria';
import { ModalTableAdicionarCategoriaComponent } from './modal/modal-table/modal-table-adicionar-categoria/modal-table-adicionar-categoria.component';
import { ModalTableAdicionarProdutoComponent } from './modal/modal-table/modal-table-adicionar-produto/modal-table-adicionar-produto.component';
import { ServiceModalPedido } from './services/show-modal/create/service.modal-pedido';
import { ServiceModalProduto } from './services/show-modal/create/service.modal-produto';
import { ServiceModalCategoria } from './services/show-modal/create/service.modal-categoria';
import { TablesComponent } from 'app/tables/tables.component';
import { ServicePedido } from './services/service.service.pedidos';
import { ServiceCategoria } from './services/service.service.categoria';
import { GlobalVariable, ConfigModal, } from './global';
import { ServiceProduto } from './services/service.service.produto';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Pipe, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import 'hammerjs';
import { ModalComponent } from './modal/modal.component';
import {
  MatInputModule, MatButtonModule, MatAutocompleteModule, MatBadgeModule,
  MatBottomSheetModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule,
  MatRadioModule, MatSidenavModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatSortModule, MatStepperModule, MatTableModule,
  MatToolbarModule, MatTabsModule, MatTooltipModule, MatTreeModule, MatSnackBarModule, MAT_TABS_CONFIG
} from '@angular/material';
import { HttpRequestInterceptor } from './auth/interceptor.module';
import { ServiceProdutoPedido } from './services/service.service.product-request';
import { ModalEditarComponent } from './modal/modal-editar/modal-editar.component';
import { ModalEditarProdutoComponent } from './modal/modal-editar/modal-editar-produto/modal-editar-produto.component';
import { ModalHomeComponent } from './modal/modal-home/modal-home/modal-home.component';
import { ModalTableAdicionarPedidoComponent } from './modal/modal-table/modal-table-adicionar-pedido/modal-table-adicionar-pedido.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule, MatAutocompleteModule,
    MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
    MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatTreeModule, MatSnackBarModule,
  ],
  entryComponents: [
    ModalComponent,
    ModalTableAdicionarProdutoComponent,
    ModalTableAdicionarCategoriaComponent,
    ModalTableAdicionarPedidoComponent,
    ModalEditarProdutoComponent,
    ModalHomeComponent,
    ModalEditarCategoriaComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModalComponent,
    ModalTableAdicionarProdutoComponent,
    ModalTableAdicionarPedidoComponent,
    ModalTableAdicionarCategoriaComponent,
    ModalEditarComponent,
    ModalEditarProdutoComponent,
    ModalEditarCategoriaComponent,
    ModalHomeComponent,
    TruncatePipe,
  ],
  providers: [ServiceProduto, GlobalVariable, ServiceCategoria, ServicePedido, ServiceProdutoPedido, ConfigModal, 
  ServiceModalCategoria, ServiceModalProduto, ServiceModalPedido, ServiceModalUpdateCategoria, ServiceModalUpdateProduto,
  { provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
