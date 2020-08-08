<?php
  header("Access-Control-Allow-Origin: *");
  header('Content-Type: application/json');

  include 'razorPay/Razorpay.php';
  include 'config.php';

  function filter_captured_payments ($obj) {
    return isset($obj->status) && $obj->status == 'captured';
  }

  function reduce_total_sales ($carry, $payment) {
    return $carry + $payment->amount;
  }

  function object_to_array ($obj) {
    return array(
      'name'=> $obj->notes->email,
      'profession'=> $obj->notes->profession,
      'amount'=> $obj->amount/100,
    );
  }

  use Razorpay\Api\Api;
  $api = new Api($api_key, $api_secret);
  
  $successful_payments_merge = array();
  $complete = false;
  $page_size = 100;
  $page = 0;
  
  while (!$complete) {
    $options = array('count' => $page_size, 'skip' => $page * $page_size);
    $payments = $api->payment->all($options)->items;
    $successful_payments = array_filter($payments, 'filter_captured_payments');
    $successful_payments_merge = array_merge($successful_payments_merge, $successful_payments);
    $complete = count($payments) != $page_size;
    $page = $page + 1;
  }
  
  $customer_count = $api->customer->all()->count;
  $total_sales = array_reduce($successful_payments_merge, 'reduce_total_sales')/100;
  $successful_payments_merge = array_map('object_to_array', $successful_payments_merge);
  echo json_encode(array(
    'contributor_count' => $customer_count,
    'amount' => $total_sales,
    'contributors' => $successful_payments_merge,
  ))
?>