<template>
  <div class="container">
    <h1>購物車</h1>
    <div class="text-end">
      <button class="btn btn-outline-danger" type="button"
      @click="delAllItem"
      :class="{'disabled': isLoaging === true}">清空購物車</button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="cartsData.carts?.length">
          <tr v-for="cartItem in cartsData.carts" :key="cartItem.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm"
              :class="{'disabled': isLoaging === true}"
              @click="delCartItem(cartItem.id)">
                <i class="fas fa-spinner fa-pulse"></i>
                x
              </button>
            </td>
            <td>
              {{ cartItem.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input min="1" type="number" class="form-control" v-model="cartItem.qty"
                  @change="updateCartNum(cartItem.id, cartItem.product.id, cartItem.qty)">
                  <span class="input-group-text" id="basic-addon2">
                    {{ cartItem.product.unit }}
                  </span>
                </div>
              </div>
            </td>
            <td class="text-end">
              {{ cartItem.final_total }}
            </td>
          </tr>
        </template>
        <template v-else>
          <div>
            <h1>請加入商品</h1>
          </div>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartsData.final_total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
            rules="email|required" v-model="userInfo.data.user.email"
          ></Field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }" v-model="userInfo.data.user.name"
          placeholder="請輸入姓名" rules="required"></Field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="text" class="form-control"
          :class="{ 'is-invalid': errors['電話'] }" v-model="userInfo.data.user.tel"
          placeholder="請輸入電話" ></Field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
          :class="{ 'is-invalid': errors['地址'] }" v-model="userInfo.data.user.address"
          placeholder="請輸入地址" rules="required" ></Field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10"
          v-model="userInfo.data.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cartsData: {},
      isLoaging: false,
      userInfo: {
        data: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: '',
          },
          message: '',
        },
      },
    };
  },
  methods: {
    getCartsData() {
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartsData = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delAllItem() {
      this.isLoaging = true;
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/carts`)
        .then(() => {
          this.getCartsData();
          this.isLoaging = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delCartItem(id) {
      this.isLoaging = true;
      this.$http.delete(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(() => {
          this.getCartsData();
          this.isLoaging = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCartNum(id, productId, qty) {
      const obj = {
        data: {
          product_id: productId,
          qty,
        },
      };
      this.$http.put(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`, obj)
        .then(() => {
          this.getCartsData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      this.$http.post(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order`, this.userInfo)
        .then((res) => {
          this.userInfo = {
            data: {
              user: {
                name: '',
                email: '',
                tel: '',
                address: '',
              },
              message: '',
            },
          };
          alert(res.data.message);
          this.getCartsData();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCartsData();
  },
};
</script>
