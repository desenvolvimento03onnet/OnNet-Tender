import { TablesComponent } from './tables/tables.component';
import { ServicePedido } from './services/service.service.pedidos';
import { ServiceCategoria } from './services/service.service.categoria';
import { TableDadosPedidoComponent } from './modal/modal-table/modal-table-remover/table-dados-pedido/table-dados-pedido.component';
import { GlobalVariable, ConfigModal, } from './global';
import { ServiceProduto } from './services/service.service.produto';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
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
import { ModalTableAdicionarComponent } from './modal/modal-table/modal-table-adicionar/modal-table-adicionar.component';
import { ModalTableRemoverComponent } from './modal/modal-table/modal-table-remover/modal-table-remover.component';
import { ModalTableAtualizarComponent } from './modal/modal-table/modal-table-atualizar/modal-table-atualizar.component';
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
import { ModalEditarCategoriaComponent } from './modal/modal-editar/modal-editar-categoria/modal-editar-categoria.component';

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
    ModalTableAdicionarComponent,
    ModalTableAtualizarComponent,
    ModalTableRemoverComponent,
    ModalEditarCategoriaComponent,
    ModalEditarProdutoComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModalComponent,
    ModalTableAdicionarComponent,
    ModalTableRemoverComponent,
    ModalTableAtualizarComponent,
    TableDadosPedidoComponent,
    ModalEditarComponent,
    ModalEditarProdutoComponent,
    ModalEditarCategoriaComponent,
  ],
  providers: [ServiceProduto, GlobalVariable, ServiceCategoria, ServicePedido, ServiceProdutoPedido, ConfigModal,
  { provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
